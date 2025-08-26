import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Zap className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold text-foreground font-headline">
        PayFlow
      </span>
    </div>
  );
};

export default Logo;
