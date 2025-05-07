
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from 'lucide-react';

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="max-w-[100px] truncate hidden sm:inline-block">
                {user.user_metadata.first_name || user.email}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-card">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/auth">
          <Button variant="outline" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavbarAuth;
