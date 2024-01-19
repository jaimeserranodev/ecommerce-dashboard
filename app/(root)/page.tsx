"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.onClose);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    },[isOpen, onOpen]);

    return ( 
        <div className="p-4">
            Root Page
        </div>
        );
    }

    export default SetupPage;