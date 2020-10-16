import React, { useState } from 'react';
import { CallLogs_List } from '../../Store/call_logs'
import './index.css'
function Call_logs() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <h5><b>Call Logs</b></h5>
            </div>
            <table className='table table-borderless'>
                <thead>
                    <tr className='number-tr' >
                        <th className="text-muted" >Agent</th>
                        <th className="text-muted" >Caller</th>
                        <th className="text-muted" >Receiver</th>
                        <th className="text-muted" >Start Time</th>
                        <th className="text-muted" >End Time</th>
                        <th className="text-muted" >Call Duration</th>
                        <th className="text-muted" >Status</th>
                    </tr>
                </thead>
                <tbody>
                    {CallLogs_List.map((item, i) => {
                        return (
                            <tr key={i} style={{ backgroundColor: '#0000000D',borderBottom:'10px solid #ffff' }}>
                                <td>{item.name}</td>
                                <td>{item.caller}</td>
                                <td>{item.receiver}</td>
                                <td>{item.start_time}</td>
                                <td>{item.call_end}</td>
                                <td>{item.call_duration}</td>
                                <td>Active</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Call_logs