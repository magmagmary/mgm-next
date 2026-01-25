import { Dialog, DialogHeader ,DialogTrigger , DialogContent ,DialogTitle ,DialogDescription} from "./components/ui/dialog";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Home page</h1>

      <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
   </div>
  );
}
