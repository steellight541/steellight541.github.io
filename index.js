function MyApp() {
    return (
        <div>
            <NavBar />
        </div>

    );
}

const Body = document.getElementById("root");
const root = ReactDOM.createRoot(Body);
root.render(<MyApp />);
