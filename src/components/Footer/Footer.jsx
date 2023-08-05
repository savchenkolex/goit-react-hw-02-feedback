import React, {Component} from "react";
import css from "./Footer.module.css";

class Footer extends Component {

    render() {
        return (
            <footer className={css.footer}>
                <ul className={css.menu}>
                    <li className={css["menu-item"]}></li>
                    <li className={css["menu-item"]}></li>
                    <li className={css["menu-item"]}></li>
                    <li className={css["menu-item"]}></li>
                    <li className={css["menu-item"]}></li>
                    <li className={css["menu-item"]}></li>
                </ul>
                <p>Copyright Oleksii Savchenko, 2023</p>
            </footer>
        )
    }
}

export default Footer;