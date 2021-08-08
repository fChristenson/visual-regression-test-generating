import fs from "fs";

const run = async () => {
  const pathArg = process.argv[2];
  const fixture = await import(new URL(pathArg, import.meta.url));
  const data = fixture.getStoryData();

  fs.writeFileSync(
    new URL(`${pathArg}.storydata.json`, import.meta.url),
    JSON.stringify(data, null, 2),
    {
      encoding: "utf8",
    }
  );
};

run();
