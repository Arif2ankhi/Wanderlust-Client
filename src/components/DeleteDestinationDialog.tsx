"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

import React from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const DeleteDestinationDialog = ({id} : {id: string}) => {

    const handleDeleteDsetination= async()=>{
      const token = await getTokenFromClient()
       
       const res = await fetch(`http://localhost:8000/destination/${id}`, {
        method:'DELETE',
        headers: {
          authorization: `Bearer ${token}`
        },
        

       })
       await res.json();
      

       redirect('/destinations')
    }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" size="sm" className="gap-2 text-red-600 hover:bg-red-50 hover:text-red-700">
            <Trash2 className="size-4" />
            Delete
          </Button>}>
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteDsetination}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteDestinationDialog;
