import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

const SearchForm = () => {
  return (
    <form action=""
    className="fixed w-[inherit] "
    >
    <div className="
    flex items-center justify-start rounded-full 
      bg-muted-foreground/10
    ">
      <Search
      className="absolute top-2 left-2 transform text-muted-foreground"
      />
      <Input className="rounded-full pl-10"/>
    </div>
    </form>
  );
};

export default SearchForm;