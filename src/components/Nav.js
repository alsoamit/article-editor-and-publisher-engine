export default function Nav({ setTab }) {
  const tabs = [
    {
      id: 0,
      name: "Dashboard",
    },
    {
      id: 1,
      name: "New Post",
    },
    {
      id: 2,
      name: "Uploaded",
    },
    {
      id: 3,
      name: "Draft",
    },
    {
      id: 4,
      name: "Draft",
    },
  ];

  const tabElements = tabs.map((tab) => {
    return (
      <button
        key={tab.id}
        className={tab.name}
        onClick={() => {
          setTab(tab.id);
        }}
      >
        {tab.name}
      </button>
    );
  });

  return (
    <header>
      <nav>{tabElements}</nav>
    </header>
  );
}
