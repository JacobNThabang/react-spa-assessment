export default function Footer() {
	return (
		<footer class="bg-primary-bg text-white h-[500px] px-20">
			<div className="flex flex-col">
				<div className="flex gap-5 mt-16">
					<div className="mt-2.5 h-1 w-10 bg-primary-active"></div>
					<span className="text-xl font-normal">Contact us</span>
				</div>
				<div className="mt-8 flex w-full justify-between gap-[423px]">
					<p className="flex justify-center font-bold text-4xl w-[455px]">
						Have a project in mind? Let's make it happen
					</p>
					<div className="flex flex-col justify-center h-20 text-xl font-normal">
						<p>22 Lawley Road, Woodstock, 7925,</p>
						<p>Cape Town, South Africa </p>
						<p>+27 21 469 1500 </p>
						<p className="underline">enquirie@kingjames.co.za </p>
					</div>
				</div>
				<div className="mt-32 flex w-full justify-between gap-9">
					<div>
						<ul class="text-white text-xl">
							<li class="mb-2">
								<a href="/" class="hover:underline">Terms of service</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Privacy</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Impressum</a>
							</li>
						</ul>
					</div>
					<div>
						<ul class="text-white text-xl">
							<li class="mb-2">
								<a href="/" class="hover:underline">Facebook</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Instagram</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Twitter</a>
							</li>
						</ul>
					</div>
					<div>
						<ul class="text-white text-xl">
							<li class="mb-2">
								<a href="/" class="hover:underline">Github</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Linkedin</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Teams</a>
							</li>
						</ul>
					</div>
					<div>
						<ul class="text-white text-xl">
							<li class="mb-2">
								<a href="/" class="hover:underline">Youtube</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Behance</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">Dribble</a>
							</li>
						</ul>
					</div>
					<div>
						<ul class="flex flex-col justify-between h-[110px] text-white text-xl">
							<li class="mb-2">
								<a href="/" class="hover:underline">Explore pen jobs</a>
							</li>
							<li class="mb-2">
								<a href="/" class="hover:underline">©2000—2022 King James Digital</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}