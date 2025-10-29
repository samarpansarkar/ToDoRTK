import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createTodo } from "../redux/reducers/Todo.reducer";
import { useNavigate } from "react-router-dom";

const AddTodoPage = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "low",
        status: "pending",
    });

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!todo.title.trim() || !todo.description.trim() || !todo.dueDate.trim()) {
            toast.warning("Please fill all required fields!");
            return;
        }

        console.log("✅ New Todo:", todo);
        try {
            dispatch(createTodo(todo))
            toast.success("✅ Todo added successfully!");
            setTodo({
                title: "",
                description: "",
                dueDate: "",
                priority: "low",
                status: "pending",
            });
            navigate("/")
        } catch (error) {
            toast.error("Something Went Wrong", error.message)
        }

    };

    return (
        <section className="min-h-screen bg-gray-50 flex justify-center items-center p-4 mt-0 pt-0">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    ➕ Add New Todo
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={todo.title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter todo title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={todo.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter todo details"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Due Date<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="dueDate"
                            value={todo.dueDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Priority
                        </label>
                        <select
                            name="priority"
                            value={todo.priority}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            name="status"
                            value={todo.status}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Add Todo
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddTodoPage;
