import React, {Component} from "react";

import css from "./Statistics.module.css";


class Statistics extends Component {


    render() {
        return (
            <>
            <h2>Statistics</h2>
            <ul className={css.votes}>
                <li className={css.vote}>Good: </li>
                <li className={css.vote}>Neutral: </li>
                <li className={css.vote}>Bad: </li>
            </ul>
            </>
        )
    }
}

export default Statistics;