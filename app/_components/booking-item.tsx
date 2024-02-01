import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const BookingItem = () => {
	return (
		<Card>
			<CardContent className="p-5 py-0 flex flex-row justify-between">
				<div className="flex flex-col gap-2 py-5">
					<Badge className="bg-[#221c3d] text-primary hover:bg-[#221c3d] w-fit">
						Confirmado
					</Badge>
					<h2 className="font-bold">Corte de cabelo</h2>
					<div className="flex items-center gap-2">
						<Avatar>
							<AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
							<AvatarFallback>FS</AvatarFallback>
						</Avatar>
						<h3>Vintage Barber</h3>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
					<p className="text-sm">Fevereiro</p>
					<p className="text-2xl">06</p>
					<p className="text-sm">09:45</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default BookingItem;
