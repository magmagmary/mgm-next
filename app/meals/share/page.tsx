import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ImagePicker from "../components/image-picker";

const MealsSharePage = () => {
  return (
    <>
      <header className="flex flex-col gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-300 text-foreground text-2xl">
        <h1 className="font-[Montserrat,sans-serif]">
          Share your{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-300 my-12 mx-auto text-white">
        <form className="max-w-200">
          <FieldGroup>
            <div className="flex gap-4">
              <Field className="flex-1">
                <FieldLabel htmlFor="name">Your name</FieldLabel>
                <Input id="name" name="name" required />
              </Field>
              <Field className="flex-1">
                <FieldLabel htmlFor="email">Your email</FieldLabel>
                <Input id="email" name="email" type="email" required />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input id="title" name="title" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="summary">Short Summary</FieldLabel>
              <Input id="summary" name="summary" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="instructions">Instructions</FieldLabel>
              <Textarea
                id="instructions"
                name="instructions"
                rows={10}
                required
              />
            </Field>
            <ImagePicker id="image" name="image" />
          </FieldGroup>
            <Button type="submit" size="lg" className="mt-4">
              Share Meal
            </Button>
        </form>
      </main>
    </>
  );
};

export default MealsSharePage;