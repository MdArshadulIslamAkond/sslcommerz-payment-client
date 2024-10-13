import { useParams } from "react-router-dom";


const Success = () => {
    const {tranId} = useParams();
    return (
        <div>
            <h2 className="text-2xl text-green-600 font-bold">Payment Success: {tranId}</h2>
        </div>
    );
};

export default Success;