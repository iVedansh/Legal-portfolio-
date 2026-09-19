import { FormEvent, useEffect, useState } from 'react';
import { LogOut, RefreshCw, ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  matter: string | null;
  message: string | null;
  status: 'new' | 'contacted' | 'closed';
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
};

const Admin = () => {
  const [email, setEmail] = useState('vineetkumarmisra402@gmail.com');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [user, setUser] = useState<any>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [checking, setChecking] = useState(true);
  const [message, setMessage] = useState('');

  const loadEnquiries = async () => {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setMessage(error.message);
      return;
    }

    setEnquiries((data || []) as Enquiry[]);
  };

  const checkAdmin = async () => {
    setChecking(true);
    const { data: { user: currentUser } } = await supabase.auth.getUser();

    if (!currentUser) {
      setUser(null);
      setChecking(false);
      return;
    }

    if (currentUser.app_metadata?.role !== 'admin') {
      await supabase.auth.signOut();
      setUser(null);
      setMessage('This account does not have admin access.');
      setChecking(false);
      return;
    }

    setUser(currentUser);
    setChecking(false);
    await loadEnquiries();
  };

  useEffect(() => {
    checkAdmin();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      // Keep this callback synchronous. Supabase warns that awaiting auth/API
      // calls inside onAuthStateChange can deadlock the client.
      if (event === 'SIGNED_OUT') {
        setUser(null);
        setEnquiries([]);
      } else if (session?.user) {
        setUser(session.user);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signIn = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setPassword('');
      await checkAdmin();
    }

    setLoading(false);
  };

  const changePassword = async (event: FormEvent) => {
    event.preventDefault();
    setMessage('');

    if (newPassword.length < 8) {
      setMessage('New password must be at least 8 characters.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setMessage('New passwords do not match.');
      return;
    }

    setChangingPassword(true);

    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      setMessage('Your admin session has expired. Please sign in again.');
      setChangingPassword(false);
      return;
    }

    const { data, error } = await supabase.functions.invoke('change-admin-password', {
      body: { password: newPassword },
    });

    if (error) {
      setMessage(error.message);
    } else if (data?.error) {
      setMessage(data.error);
    } else {
      setNewPassword('');
      setConfirmNewPassword('');
      setMessage('Password changed successfully. Please sign in again with your new password.');
      await supabase.auth.signOut();
      setUser(null);
      setEnquiries([]);
    }

    setChangingPassword(false);
  };

  const sendResetLink = async () => {
    setResetting(true);
    setMessage('');

    const redirectTo = `${window.location.origin}/admin/reset-password`;

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('If this email belongs to an account, a reset link has been sent. Check your inbox.');
    }

    setResetting(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setEnquiries([]);
  };

  const updateEnquiry = async (
    id: string,
    changes: Partial<Pick<Enquiry, 'status' | 'admin_notes'>>
  ) => {
    const { error } = await supabase
      .from('enquiries')
      .update(changes)
      .eq('id', id);

    if (error) {
      setMessage(error.message);
      return;
    }

    setEnquiries((items) =>
      items.map((item) => (item.id === id ? { ...item, ...changes } : item))
    );
  };

  if (checking) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-ivory-100">
        <p className="text-navy-900">Checking admin access...</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="min-h-[70vh] bg-ivory-100 px-6 py-16">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-xl border border-navy-900/10">
          <div className="mb-8 text-center">
            <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-gold-500" />
            <h1 className="font-serif text-3xl text-navy-900">Admin Login</h1>
            <p className="mt-2 text-sm text-gray-600">
              Sign in with the authorized administrator account.
            </p>
          </div>

          <form onSubmit={signIn} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-navy-900">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gold-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-navy-900">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gold-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-navy-900 px-4 py-3 font-medium text-white transition hover:bg-navy-800 disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <button
            type="button"
            onClick={sendResetLink}
            disabled={resetting || !email.trim()}
            className="mt-4 w-full text-sm font-medium text-navy-900 underline underline-offset-4 hover:text-gold-600 disabled:opacity-50"
          >
            {resetting ? 'Sending reset link...' : 'Forgot password?'}
          </button>

          {message && (
            <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] bg-ivory-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gold-400">VKM ADMINISTRATION</p>
            <h1 className="mt-1 font-serif text-3xl">Enquiries Dashboard</h1>
            <p className="mt-1 text-sm text-ivory-200">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={loadEnquiries}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
            >
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-4 py-2 text-sm text-navy-900 hover:bg-gold-400"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>

        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm border border-navy-900/10">
          <h2 className="font-serif text-2xl text-navy-900">Change Password</h2>
          <p className="mt-1 text-sm text-gray-600">
            Change your admin login password without sending a reset email.
          </p>

          <form onSubmit={changePassword} className="mt-5 grid gap-4 md:grid-cols-2">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={8}
              required
              placeholder="New password"
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gold-500"
            />
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              minLength={8}
              required
              placeholder="Confirm new password"
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gold-500"
            />
            <button
              type="submit"
              disabled={changingPassword}
              className="rounded-lg bg-navy-900 px-4 py-3 font-medium text-white transition hover:bg-navy-800 disabled:opacity-60 md:col-span-2"
            >
              {changingPassword ? 'Changing password...' : 'Change Password'}
            </button>
          </form>
        </div>

        {message && (
          <div className="mb-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</div>
        )}

        {enquiries.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="font-serif text-2xl text-navy-900">No enquiries yet</h2>
            <p className="mt-2 text-gray-600">New contact-form submissions will appear here.</p>
          </div>
        ) : (
          <div className="space-y-5">
            {enquiries.map((item) => (
              <article key={item.id} className="rounded-2xl bg-white p-6 shadow-sm border border-navy-900/10">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-navy-900">{item.name}</h2>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.phone}{item.email ? ' • ' + item.email : ''}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleString()}
                    </p>
                  </div>

                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateEnquiry(item.id, {
                        status: e.target.value as Enquiry['status'],
                      })
                    }
                    className="h-10 rounded-lg border border-gray-300 px-3 text-sm text-navy-900"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                {item.matter && (
                  <p className="mt-5 text-sm">
                    <strong className="text-navy-900">Matter:</strong> {item.matter}
                  </p>
                )}

                {item.message && (
                  <div className="mt-4 rounded-lg bg-ivory-100 p-4 text-sm leading-6 text-gray-700">
                    {item.message}
                  </div>
                )}

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-navy-900">
                    Admin notes
                  </label>
                  <textarea
                    value={item.admin_notes || ''}
                    onChange={(e) =>
                      setEnquiries((items) =>
                        items.map((x) =>
                          x.id === item.id ? { ...x, admin_notes: e.target.value } : x
                        )
                      )
                    }
                    onBlur={(e) => updateEnquiry(item.id, { admin_notes: e.target.value })}
                    rows={3}
                    placeholder="Add a private follow-up note..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gold-500"
                  />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;
