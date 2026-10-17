import { createFileRoute } from "@tanstack/react-router";
import CareerDetails from "../pages/CareerDetails";
export const Route = createFileRoute("/career/$id")({ component: CareerDetails });
