import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ready, setReady] = useState(false);
  const [checking, setChecking] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;

    const prepareRecovery = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (mounted && session) {
        setReady(true);
        setChecking(false);
      }
    };

    prepareRecovery();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;
      if (event === 'PASSWORD_RECOVERY' && session) {
        setReady(true);
        setChecking(false);
      }
    });

    const timeout = window.setTimeout(() => {
      if (mounted) setChecking(false);
    }, 4000);

    return () => {
      mounted = false;
      window.clearTimeout(timeout);
      listener.subscription.unsubscribe();
    };
  }, []);

  const updatePassword = async (event: FormEvent) => {
    event.preventDefault();
    setMessage('');

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setSaving(true);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(error.message);
      setSaving(false);
      return;
    }

    await supabase.auth.signOut();
    setMessage('Password updated successfully. You can now sign in with your new password.');
    setPassword('');
    setConfirmPassword('');
    setSaving(false);

    window.setTimeout(() => navigate('/admin'), 1500);
  };

  if (checking) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-ivory-100 px-6">
        <p className="text-navy-900">Verifying reset link...</p>
      </section>
    );
  }

  if (!ready) {
    return (
      <section className="min-h-[70vh] bg-ivory-100 px-6 py-16">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-xl border border-navy-900/10">
          <LockKeyhole className="mx-auto mb-4 h-12 w-12 text-gold-500" />
          <h1 className="font-serif text-3xl text-navy-900">Reset Password</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            This reset link is invalid, expired, or has already been used.
            Please request a new link from the Admin login page.
          </p>
          <Link
            to="/admin"
            className="mt-6 inline-block rounded-lg bg-navy-900 px-5 py-3 font-medium text-white hover:bg-navy-800"
          >
            Back to Admin Login
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] bg-ivory-100 px-6 py-16">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-xl border border-navy-900/10">
        <div className="mb-8 text-center">
          <LockKeyhole className="mx-auto mb-4 h-12 w-12 text-gold-500" />
          <h1 className="font-serif text-3xl text-navy-900">Set New Password</h1>
          <p className="mt-2 text-sm text-gray-600">
            Choose a new password for the administrator account.
          </p>
        </div>

        <form onSubmit={updatePassword} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-navy-900">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
              autoComplete="new-password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gold-500"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-navy-900">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={8}
              required
              autoComplete="new-password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gold-500"
              placeholder="Re-enter new password"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-lg bg-navy-900 px-4 py-3 font-medium text-white transition hover:bg-navy-800 disabled:opacity-60"
          >
            {saving ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        {message && (
          <p className={`mt-5 rounded-lg p-3 text-sm ${message.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default ResetPassword;
