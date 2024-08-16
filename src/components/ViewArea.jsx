export default function ViewArea({ pieces }) {
    return <div className="output">
        {
            pieces.map((p, i) => <div>
                {p.toString()}
            </div>

            )
        }
    </div>
};