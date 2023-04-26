export const items = [
  {
    id:1,
    text: "Inbox",
    icon: "k-i-inbox",
    selected: true
  },
  {
    separator: true,
  },
  {
    id:2,
    text: "Attachments",
    icon: "k-i-envelop-link"
  },
  {
    text: "Calendar",
    icon: "k-i-calendar",
    id: 3
  },
  {
    text: "Notes",
    icon: "k-i-edit",
    id: 4,
    parentId: 3
  },
  {
    text: "Archive",
    icon: "k-i-circle",
    id: 5,
    parentId: 3
  },
];