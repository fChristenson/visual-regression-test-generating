import cartesian from "cartesian";
import faker from "faker";

export const getStoryData = () =>
  cartesian({
    primary: [true, false],
    // I like random data because it will show you if you really want ANY value.
    // Should color be a string or an enum?
    backgroundColor: [
      faker.internet.color(),
      faker.internet.color(),
      faker.internet.color(),
    ],
    size: ["small", "medium", "large"],
    // Will out button handle overflow or missing data?
    label: [
      faker.lorem.words(faker.datatype.number(10)),
      faker.lorem.words(3),
      faker.lorem.words(1),
    ],
    onClick: () => {},
  });
