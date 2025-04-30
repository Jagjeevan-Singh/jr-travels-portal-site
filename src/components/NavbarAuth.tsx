
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NavbarAuth: React.FC = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Error signing out',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Signed out successfully',
        description: 'You have been signed out.',
      });
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <Button variant="outline" onClick={handleSignOut}>
          Sign Out
        </Button>
      ) : (
        <Link to="/auth">
          <Button variant="outline">Sign In</Button>
        </Link>
      )}
    </div>
  );
};

export default NavbarAuth;
