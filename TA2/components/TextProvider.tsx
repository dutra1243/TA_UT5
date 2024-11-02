import React from "react";

export const TextContext = React.createContext<any>(null);

export const TextProvider = ({ children }: { children: React.ReactNode }) => {

    const [text, setText] = React.useState("");

    return (
        <TextContext.Provider value={[text, setText]}>
            {children}
        </TextContext.Provider>
    );
}

export default TextProvider;