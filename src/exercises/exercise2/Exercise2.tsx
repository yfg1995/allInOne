import { Switcher } from "./Switcher";
import { TextArea } from "./TextArea";

export const Exercise2 = () => {
  return (
    <>
      <Switcher
        title="title1"
        className="mb-4"
        checkedClass="h-72"
        unCheckedClass="h-0"
      >
        <TextArea title="Textarea" className="min-h-full" />
      </Switcher>

      <Switcher title="title2" checkedClass="h-72" unCheckedClass="h-0">
        <TextArea title="Textarea" className="min-h-full" />
      </Switcher>
    </>
  );
};
