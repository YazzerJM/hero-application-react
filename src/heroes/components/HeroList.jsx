import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroesCard } from "./HeroesCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(heroe => (
                    <HeroesCard
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    )
}
