import React from "react";
import { Link } from "react-router-dom";

const TodoCard = ({ todo }) => {
    const { title, description, dueDate, priority, status, id } = todo;

    const priorityColor =
        priority === "high"
            ? "bg-red-500"
            : priority === "medium"
                ? "bg-yellow-500"
                : "bg-green-500";

    const statusColor =
        status === "completed"
            ? "text-green-600"
            : status === "pending"
                ? "text-yellow-600"
                : "text-gray-500";

    return (
        <Link to={`update/${id}`} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 flex flex-col justify-between h-full">
            <div className="mb-4">
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                        {title}
                    </h2>
                    <span
                        className={`text-xs font-medium text-white px-3 py-1 rounded-full uppercase tracking-wide ${priorityColor}`}
                    >
                        {priority}
                    </span>
                </div>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="border-t border-gray-200 my-3"></div>

            <div className="flex justify-between items-center text-sm">
                <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Due:</span>{" "}
                    {new Date(dueDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
                <span
                    className={`font-semibold capitalize ${statusColor} text-sm tracking-wide`}
                >
                    {status}
                </span>
            </div>
        </Link>
    );
};

export default TodoCard;
