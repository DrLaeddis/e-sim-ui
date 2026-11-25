interface StepIndicatorProps {
    currentStep: number; // 1 = step 1 aktif, 2 = step 2 aktif, 3 = semua selesai (centang)
    totalSteps?: number;
}

export default function StepIndicator({
    currentStep,
    totalSteps = 2,
}: StepIndicatorProps) {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

    return (
        <div className="flex items-center">
            {steps.map((step, index) => {
                const isCompleted = step < currentStep;
                const isActive = step === currentStep;

                return (
                    <div key={step} className="flex items-center">
                        <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                                isCompleted || isActive
                                    ? "bg-white text-indigo-900"
                                    : "bg-white/30 text-white/80"
                            }`}
                        >
                            {isCompleted ? (
                                <svg
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            ) : (
                                step
                            )}
                        </div>

                        {index < steps.length - 1 && (
                            <div
                                className={`h-0.5 w-3 transition-colors ${
                                    isCompleted ? "bg-white" : "bg-white/40"
                                }`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}