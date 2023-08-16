import { Tabs } from "../../components/Tabs";
import { Section } from "../../components/Section";

export const OurServices = () => {
  const tabs = [
    {
      id: "1",
      title: "Laptops",
      content: <div>First tab</div>,
    },
    {
      id: "2",
      title: "USB Sticks",
      content: <div>Second tab</div>,
    },
    {
      id: "3",
      title: "Monitors",
      content: <div>Third tab</div>,
    },
  ];

  return (
    <Section className="mb-4" title="Our Services">
      <Tabs tabs={tabs} />
    </Section>
  );
};
