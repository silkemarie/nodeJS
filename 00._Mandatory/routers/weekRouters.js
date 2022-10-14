import { Router } from "express";
//vælger Router fremfor hele express library

const weekRouter = Router();

export default weekRouter;


weekRouter.get("/ses/:id", (req, res) => {
  console.log("vi er i weekrouters id");
    const week = weeks.find(
      (week) => week.weeksId === Number(req.params.id)
    );
    res.status(200).send({ data: week });
  });
  
  weekRouter.get("/weeks", (req, res) => {
    res.status(200).send({ data: weeks });
  });

  const weeks = [
    {
      weeksId: 1,
      title: "Week 1",
      subEntries: [
        {
          subEntriesId: 1,
          subTitle: `Overskrift 1`,
          text: `Tekst 1
        `,
        },
        {
          subEntriesId: 2,
          subTitle: `Overskrift 2 tester`,
          text: `Tekst 2 test om autogeneret eller rigtigt
        `,
        },
        {
          subEntriesId: 3,
          subTitle: `Overskrift 3`,
          text: `Tekst 3
        `,
        },
        {
          subEntriesId: 4,
          subTitle: `Overskrift 4`,
          text: `Tekst 4
        `,
        },
        {
          subEntriesId: 5,
          subTitle: `Overskrift 5`,
          text: `Tekst 5
        `,
        },
      ],
    },
    {
      weeksId: 2,
      title: "Week 2",
      subEntries: [
        { subEntriesId: 1, subTitle: "Subtitle 1", text: "text2 for subtitle 1" },
        { subEntriesId: 2, subTitle: "Subtitle 2", text: "text for subtitle 2" },
        { subEntriesId: 3, subTitle: "Subtitle 3", text: "text for subtitle 3" },
      ],
    },
    {
      weeksId: 3,
      title: "Week 3",
      subEntries: [
        { subEntriesId: 1, subTitle: "Subtitle 1", text: "text3 for subtitle 1" },
        { subEntriesId: 2, subTitle: "Subtitle 2", text: "text for subtitle 2" },
        { subEntriesId: 3, subTitle: "Subtitle 3", text: "text for subtitle 3" },
      ],
    },
    {
      weeksId: 4,
      title: "Week 4",
      subEntries: [
        { subEntriesId: 1, subTitle: "Subtitle 1", text: "text3 for subtitle 1" },
        { subEntriesId: 2, subTitle: "Subtitle 2", text: "text for subtitle 2" },
        { subEntriesId: 3, subTitle: "Subtitle 3", text: "text for subtitle 3" },
      ],
    },
    {
      weeksId: 5,
      title: "Week 5",
      subEntries: [
        { subEntriesId: 1, subTitle: "Subtitle 1", text: "text3 for subtitle 1" },
        { subEntriesId: 2, subTitle: "Subtitle 2", text: "text for subtitle 2" },
        { subEntriesId: 3, subTitle: "Subtitle 3", text: "text for subtitle 3" },
      ],
    },
    {
      weeksId: 6,
      title: "Week 6",
      subEntries: [
        { subEntriesId: 1, subTitle: "Subtitle 1", text: "text3 for subtitle 1" },
        { subEntriesId: 2, subTitle: "Subtitle 2", text: "text for subtitle 2" },
        { subEntriesId: 3, subTitle: "Subtitle 3", text: "text for subtitle 3" },
      ],
    },
    {
      weeksId: 7,
      title: "Week 7",
      subEntries: [
        { subEntriesId: 1, subTitle: "Subtitle 1", text: "text3 for subtitle 1" },
        { subEntriesId: 2, subTitle: "Subtitle 2", text: "text for subtitle 2" },
        { subEntriesId: 3, subTitle: "Subtitle 3", text: "text for subtitle 3" },
      ],
    },
  ];