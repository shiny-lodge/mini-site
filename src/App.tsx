import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";

import List from "@editorjs/list";
import Header from "@editorjs/header";
import EditorJS from "@editorjs/editorjs";
import {usePB} from "./usePB";
import Rodal from 'rodal';
import "rodal/lib/rodal.css";
import "./App.css";

function App() {

    const [editor, setEditor] = useState<EditorJS | null>(null);

    useEffect(() => {
        if (editor === null) {
            setEditor(new EditorJS({
                holder: "editorjs",
                placeholder: "Напишите здесь что-нибудь",
                tools: {
                    header: {
                        class: Header
                    },

                    list: {
                        class: List,
                        inlineToolbar: true,
                        config: {
                            defaultStyle: "unordered"
                        }
                    },
                },
            }));
        }
    }, [editor]);

    const { pb } = usePB();


    const [open, setOpen] = useState(false);
    const send = async () => {
        const content = await editor?.save();

        const data = {
            "content": content
        };

        const record = await pb.collection("posts").create(data);

        setOpen(true);
        editor?.clear();
    };

    return (
        <div className="w-screen h-screen bg-black flex justify-center">
            <div className="w-[650px] flex flex-col gap-2 pt-16 items-start ">
                <h1 className="text-4xl font-bold text-white font-pragmatica">Напишите статью</h1>
                <h2 className="text-white font-pragmatica">Нам очень важно ваше мнение</h2>
                <div id="editorjs" className="w-full"></div>

                <button onClick={ send } className="rounded-md px-6 py-2 gradient text-white">Отправить</button>
            </div>

            <Rodal visible={ open } onClose={ () => setOpen(false) }>
                <div className="w-full h-full flex items-center justify-center flex-col">
                    <span>Спасибо за статью!</span>
                </div>
            </Rodal>
        </div>
    );
}

export default App;
