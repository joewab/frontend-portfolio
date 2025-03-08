import { useState, useEffect } from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [offset, setOffset] = useState(0);

    const timeZones = [
        { name: 'EST', tzoffset: -5 },
        { name: 'CST', tzoffset: -6 },
        { name: 'MST', tzoffset: -7 },
        { name: 'PST', tzoffset: -8 }
    ];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const localOffset = now.getTimezoneOffset() / 60;
            now.setHours(now.getHours() + offset + localOffset);
            setCurrentTime(now);
        };

        // Initial update when offset changes
        updateTime();

        // Update time every second
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [offset]); // Re-run when `offset` changes

    const changeTimeZone = (event: any) => {
        const newOffset = parseInt(event.target.value);
        setOffset(newOffset);
    };

    return (
        <div className="clock-container flex flex-col">
            <h1 className="text-white mb-5">A little clock I made:</h1>
            <div className="flex flex-row items-center">
                <p className="text-white text-6xl mr-4">
                    {currentTime.toLocaleTimeString()}
                </p>
                <select className="rounded-md h-6" id='timeZoneSelect' value={offset} onChange={changeTimeZone}>
                    {timeZones.map((tz) => (
                        <option key={tz.name} value={tz.tzoffset}>
                            {tz.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Clock;