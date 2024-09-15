import {
	Step1,
	Step2,
	Step3,
	Step4,
	Step5,
	Step6,
	Step7,
	Step8,
	Step9,
	Step10,
	Step11,
	Step12,
	Step13,
	Step14,
} from '@/components/steps';

export default function Steps() {
	return (
		<div className="container flex flex-col gap-4 md:gap-8">
			<div className="flex flex-col gap-4">
				<Step1 />
				<Step2 />
				<Step3 />
				<Step4 />
				<Step5 />
				<Step6 />
				<Step7 />
				<Step8 />
				<Step9 />
				<Step10 />
				<Step11 />
				<Step12 />
				<Step13 />
				<Step14 />
			</div>
		</div>
	);
}
