import type { Faq } from "../../faqs";

type FaqItemProps = {
	faq: Faq;
	isOpen: boolean;
	onToggle: () => void;
};

export default function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
	const { id, question, answer } = faq;

	return (
		<article
			className={`faq-item group bg-white rounded-2xl border transition-all duration-200 ${isOpen
					? "border-indigo-300 shadow-md"
					: "border-slate-200 shadow-sm"
				}`}
			id={String(id)}
			data-state={isOpen ? "open" : "closed"}
		>
			<button
				type="button"
				className="faq-trigger w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 cursor-pointer"
				aria-expanded={isOpen}
				onClick={onToggle}
			>
				<div className="flex items-center gap-3.5">
					<span
						className={`faq-icon-box shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isOpen
								? "bg-indigo-600 text-white"
								: "bg-slate-100 text-slate-500"
							}`}
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2.5"
								d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</span>
					<span
						className={`faq-question text-sm sm:text-base font-semibold transition-colors ${isOpen ? "text-indigo-900" : "text-slate-800"
							}`}
					>
						{question}
					</span>
				</div>
				<span
					className={`faq-chevron shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-300 ${isOpen
							? "bg-indigo-50 text-indigo-600 rotate-180"
							: "bg-slate-100 text-slate-500"
						}`}
				>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.5"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</span>
			</button>
			<div
				className={`faq-panel grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
					}`}
			>
				<div className="overflow-hidden">
					<div
						className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 pt-3"
						dangerouslySetInnerHTML={{ __html: answer }}
					/>
				</div>
			</div>
		</article>
	);
}
