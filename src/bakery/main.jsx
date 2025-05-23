import { createRoot } from "react-dom/client";
import Artikel from "./Artikel";
import Container from "./Container";
import './custom.css';
import QnASection from "./QnASection";
import ProductItem from "./ProductItem"

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <Artikel/>
                <ProductItem/>c
                <QnASection/>
            </Container>
        </div>
    )