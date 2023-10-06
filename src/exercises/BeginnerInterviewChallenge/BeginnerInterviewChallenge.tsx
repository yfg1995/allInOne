import { FC, useState } from "react";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { fetchSynonyms } from "./api/FetchSynonyms";

// https://www.datamuse.com/api/

interface ISynonym {
  word: string;
  score: number;
}

export const BeginnerInterviewChallenge: FC<ISynonym> = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState<ISynonym[]>([]);

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSynonyms(word).then(setSynonyms);
  };

  const handleSynonymClicked = (newWord: string) => {
    setWord(newWord);
    fetchSynonyms(newWord).then(setSynonyms);
  };

  return (
    <div>
      <form className="flex" onSubmit={handleFetchSynonyms}>
        <Label title="Your word">
          <Input value={word} onChange={(val) => setWord(val)} />
        </Label>

        <Button
          title="Submit"
          className="rounded-lg ml-2 text-black border-slate-400"
        />
      </form>

      <ul>
        {synonyms.map((synonym, idx) => (
          <li key={idx} onClick={() => handleSynonymClicked(synonym.word)}>
            {synonym.word}
          </li>
        ))}
      </ul>
    </div>
  );
};
