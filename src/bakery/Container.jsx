export default function Container({children}){
    return(
        <div className="card">
            <div className="card2"><h1>🫧🧁Yummy Bakery – Fresh, Tasty, and Delightful🍞🍰</h1></div>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Yummy</p>
            </footer>
        </div>
    )
}
