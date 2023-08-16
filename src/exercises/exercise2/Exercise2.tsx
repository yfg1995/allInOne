import { Switcher } from "./Switcher";
import { TextArea } from "./TextArea";

export const Exercise2 = () => {
  return (
    <>
      <Switcher title="title1" className="mb-4">
        <TextArea title="Textarea" className="min-h-full" />
      </Switcher>

      <Switcher title="title2">
        <TextArea title="Textarea" className="min-h-full" />
      </Switcher>
    </>
  );
};
