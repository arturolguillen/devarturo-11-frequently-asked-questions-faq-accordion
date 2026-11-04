import { useState } from "react";
import type { Faq } from "../../faqs";
import FaqItem from "./FaqItem";

type FaqAccordionProps = {
	faqs: Faq[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
	const [openId, setOpenId] = useState<number | null>(
		() => faqs.find((f) => f.defaultOpen)?.id ?? null,
	);

	function handleToggle(id: number) {
		setOpenId((current) => (current === id ? null : id));
	}

	return (
		<div className="space-y-3.5">
			{faqs.map((faq) => (
				<FaqItem
					key={faq.id}
					faq={faq}
					isOpen={openId === faq.id}
					onToggle={() => handleToggle(faq.id)}
				/>
			))}
		</div>
	);
}
