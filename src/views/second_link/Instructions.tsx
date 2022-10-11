import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { ValidateToken } from '@/redux/candidates/actions/CandidateAction'
import Next from '@/components/buttons/Next'
import Lang from '@/components/extras/Lang'
import Header from '@/components/header/Header'
import {
	VIEW_404,
	VIEW_REQUIRED_STEPS,
} from '@/config/routes/paths'
import { AppDispatch, State } from '@/redux/store/store'

const Instructions = () => {
	/*  */
	const dispatch = useDispatch<AppDispatch>()
	const { t } = useTranslation()

	const error = useSelector(
		(state: State) => state.info.error,
	)

	const [searchParams] = useSearchParams()
	const token = searchParams.get('token')

	if (error.status === 401) {
		window.location.href = VIEW_404
	}

	useEffect(() => {
		dispatch(ValidateToken(token || ''))
	}, [dispatch, token])

	return (
		<>
			<Lang />
			<Header
				width="laptop:w-[177px] mobile:w-[161px] tablet:w-[154px]"
				height="laptop:h-[118px] mobile:h-[107px] tablet:h-[102px]"
			/>
			<div className="grid justify-items-center content-center">
				<h2 className="font-raleway font-semibold text-cyan-color mobile:text-lg laptop:text-2xl mobile:my-12 laptop:mb-8 laptop:mt-5">
					{t('instructions.title')}
				</h2>
				<section className="mobile:w-full laptop:w-3/5 desktop:w-6/12">
					<ul className="font-raleway font-normal mobile:text-[14px] laptop:text-[15px] text-gray-color text-justify">
						<li className="flex items-center justify-start my-1 p-2">
							<RiCheckboxCircleFill className="text-cyan-color h-[24px] w-[24px] laptop:mr-8 mobile:mr-3" />{' '}
							{t('instructions.rules.part_1')}
						</li>
						<li className="flex items-center justify-start my-1 p-2">
							<RiCheckboxCircleFill className="text-cyan-color h-[24px] w-[24px] laptop:mr-8 mobile:mr-3" />{' '}
							{t('instructions.rules.part_2')}
						</li>
						<li className="mobile:hidden tablet:flex laptop:flex items-center justify-start my-1 p-2">
							<RiCheckboxCircleFill className="text-cyan-color h-[24px] w-[24px] laptop:mr-8 mobile:mr-3" />
							{t('instructions.rules.part_3')}
						</li>
						<li className="mobile:flex tablet:hidden laptop:hidden items-center justify-start my-1 p-2">
							<RiCheckboxCircleFill className="text-cyan-color h-[24px] w-[24px] laptop:mr-8 mobile:mr-3" />
							{t('instructions.rules.extra.l1')}
						</li>
						<li className="mobile:flex tablet:hidden laptop:hidden items-center justify-start mt-[-15px] mb-1 p-2">
							<RiCheckboxCircleFill className="text-white h-[24px] w-[24px] laptop:mr-8 mobile:mr-3" />
							{t('instructions.rules.extra.l2')}
						</li>
					</ul>
				</section>
				<span className="font-raleway font-bold text-base text-gray-color mt-28">
					{t('instructions.are_you_ready')}
				</span>
				<Next
					name={t('instructions.get_started')}
					link={`${VIEW_REQUIRED_STEPS}?token=${token}`}
					width="laptop:w-[155px] laptop:h-[59px] mobile:w-32"
				/>
			</div>
		</>
	)
}

export default Instructions
