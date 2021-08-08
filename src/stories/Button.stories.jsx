import React from "react";
import { Button } from "./Button";
import { default as storyData } from "./Button.fixture.js.storydata.json";

export default {
  title: "Example/Button",
  component: Button,
};

export const Buttons = () => {
  return storyData.map((args, i) => {
    return (
      <>
        <pre>
          <code>{JSON.stringify(args, null, 2)}</code>
        </pre>
        <Button key={i} {...args} />
        <br />
      </>
    );
  });
};
