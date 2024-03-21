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

// update the root every 5 seconds
setInterval(async () => {
    root.render(<MyApp />);
}, 10);
