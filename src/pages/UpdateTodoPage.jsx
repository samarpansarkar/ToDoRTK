import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { todoDetails, updateTodo } from "../redux/reducers/Todo.reducer";

const UpdateTodoPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "low",
        status: "pending",
    });

    const { id } = useParams();
    const dispatch = useDispatch();
    const { todo, isLoading, isError, errorMsg } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(todoDetails(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (todo && Object.keys(todo).length > 0) {
            setFormData(todo);
        }
    }, [todo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Todo:", formData);
        dispatch(updateTodo({ id, formData }));
    };

    return (
        <section className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    ✏️ Update Todo
                </h2>
                {isLoading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : isError ? (
                    <p className="text-center text-red-500">{errorMsg}</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Enter todo title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
                                placeholder="Enter todo details"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Due Date<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Priority
                            </label>
                            <select
                                name="priority"
                                value={formData.priority}
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
                                value={formData.status}
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
                            Update Todo
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default UpdateTodoPage;
