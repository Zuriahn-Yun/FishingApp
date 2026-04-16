import { useState } from 'react'
import { ChevronRight, RotateCcw, ExternalLink } from 'lucide-react'
import { licenseTree, licenseQuestions, buyLink } from '../../data/licenses'

export default function LicenseWizard() {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)

  const currentQuestion = licenseQuestions[step]
  const isComplete = step >= licenseQuestions.length

  let result = null
  if (isComplete) {
    try {
      result = licenseTree[answers.residency][answers.age][answers.waterType]
    } catch {
      result = null
    }
  }

  function handleAnswer(value) {
    const newAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(newAnswers)
    setStep(s => s + 1)
  }

  function reset() {
    setAnswers({})
    setStep(0)
  }

  return (
    <div className="px-4 py-4">
      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-5">
        {licenseQuestions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < step ? 'bg-blue-500' : i === step ? 'bg-blue-300' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      {/* Completed answers summary */}
      {step > 0 && (
        <div className="bg-slate-50 rounded-xl p-3 mb-4 space-y-1">
          {licenseQuestions.slice(0, step).map(q => (
            <div key={q.id} className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{q.question}</span>
              <span className="font-semibold text-blue-700 ml-2">
                {q.options.find(o => o.value === answers[q.id])?.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Current question */}
      {!isComplete && (
        <div>
          <p className="text-xs text-slate-500 mb-1">Step {step + 1} of {licenseQuestions.length}</p>
          <h2 className="text-base font-bold text-slate-800 mb-1">{currentQuestion.question}</h2>
          <p className="text-xs text-slate-400 mb-4">{currentQuestion.hint}</p>
          <div className="space-y-2">
            {currentQuestion.options.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 flex items-center justify-between hover:border-blue-400 hover:bg-blue-50 transition-colors active:scale-[0.98]"
              >
                {opt.label}
                <ChevronRight size={16} className="text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result */}
      {isComplete && result && (
        <div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">Your License</p>
            <h2 className="text-base font-bold text-slate-800 mb-1">{result.name}</h2>
            <p className="text-2xl font-bold text-green-700 mb-2">{result.price}</p>
            <p className="text-xs text-slate-600">{result.description}</p>
          </div>

          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white rounded-xl py-3 text-sm font-semibold mb-3 hover:bg-blue-700 transition-colors"
          >
            Buy License on WDFW <ExternalLink size={14} />
          </a>

          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-600 rounded-xl py-3 text-sm font-medium hover:bg-slate-200 transition-colors"
          >
            <RotateCcw size={14} /> Start Over
          </button>

          <p className="text-[10px] text-slate-400 text-center mt-3">
            Prices shown are estimates. Verify current pricing at fishhunt.dfw.wa.gov. Additional endorsements (salmon, steelhead, 2nd rod) may be required.
          </p>
        </div>
      )}
    </div>
  )
}
