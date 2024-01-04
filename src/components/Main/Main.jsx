import { Pagetitle } from "../Pagetitle/Pagetitle.jsx";
import { List, artist } from "../List/List";
import { Greeting } from "../Greeting/Greeting.jsx";

export const Main = () => {
    return (
        <main>
            <Pagetitle pagetitle="Welcome"></Pagetitle>
            <List data={artist}></List>
            <Greeting name='Bob' />
        </main>
    );
};
