import tenseData from "../data/tenseData";
export default function Grammar() {
  return (
    <>
      <div className="container">
        <h2 className="text-5xl text-center font-bold my-3">
          English Tense Structures
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tenseData.map((tense) => (
            <div
              key={tense.tense}
              className="card -md hover:shadow-lg cursor-pointer"
            >
              <div className="card-body">
                <div className="card-title" size="sm">
                  {tense.tense}
                </div>
                <div className="text mt-2">{tense.formula}</div>
                <div className="text mt-2 font-bold">Example: {tense.example}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
