"use client";
import React from "react";
 import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const QueryProvider=({children}:{children:React.ReactNode})=>{
    const[query,setQuery]=React.useState(
        ()=>new QueryClient()
    );
    return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
    
}
export default QueryProvider;