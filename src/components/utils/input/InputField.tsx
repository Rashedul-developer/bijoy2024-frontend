"use client"

interface InputProps {
    label: string,
    type?: 'text' | 'password' | 'number' | 'email';
    id: string;
    name: string;
    placeholder?: string;
    disable?: boolean;
    required?: boolean;
    keyUp?: (e: any) => void
}

const InputField: React.FC<InputProps> = ({ label, type = 'text', placeholder = '', disable = false, required = false, id, name, keyUp }) => {
    return (
        <div>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
            )}

            <div className="mt-2">
                <input className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type={type}
                    id={id}
                    name={name}
                    onKeyUp={keyUp}
                    required={required}
                    placeholder={placeholder}
                    disabled={disable} />
            </div>
        </div>
    );
}

export default InputField; 