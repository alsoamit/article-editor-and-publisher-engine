
export default function Nav({setTab}) {
    const tabs = [
        {
            id: 1,
            name: "dashboard",
        },
        {
            id: 2,
            name: "dashboard",
        },
        {
            id: 3,
            name: "dashboard",
        },
        {
            id: 4,
            name: "dashboard",
        },
        {
            id: 5,
            name: "dashboard",
        }
    ]

    const tabElements = tabs.map(tab => {
        return(
            <button id={tab.id} className={tab.name} onClick={
                ()=>{setTab(tab.id)}
            }>{tab.name}</button>
        )
    })

    return (
        <header>
            <nav>
                {tabElements}
            </nav>
        </header>
    )
}

