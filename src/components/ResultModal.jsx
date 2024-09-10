export default function ResultModal({result, targetTime}) {
    return(
        <dialog className="result-modal" open>
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timmer with <strong></strong> seconds left.</p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}