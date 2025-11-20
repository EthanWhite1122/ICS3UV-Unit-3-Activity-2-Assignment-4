/*
Author:Ethan White
Version:1.0.0
Date: 2025-11-19
Fileoverview: This program calulates interest over 10 years
*/
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {

	// create variables
	const years = 10;
	var amount string
	var interest string

	reader := bufio.NewReader(os.Stdin)

	// input
	fmt.Print("Please type in the money you would be putting into the bank: ")
	amount, _ = reader.ReadString('\n')
	amount = strings.TrimSpace(amount)
	if amount == "" {
		amount = "0"
	}
	initialamount, _ := strconv.ParseFloat(amount, 64)

	fmt.Print("Please input the current interest rate: ")
	interest, _ = reader.ReadString('\n')
	interest = strings.TrimSpace(interest)
	if interest == "" {
		interest = "0"
	}
	rate1, _ := strconv.ParseFloat(interest, 64)
	rate := rate1 / 100

	// calculate
	year1_interest := initialamount * rate
	year1_total := initialamount + year1_interest

	year2_interest := year1_total * rate
	year2_total := year1_total + year2_interest

	year3_interest := year2_total * rate
	year3_total := year2_total + year3_interest

	year4_interest := year3_total * rate
	year4_total := year3_total + year4_interest

	year5_interest := year4_total * rate
	year5_total := year4_total + year5_interest

	year6_interest := year5_total * rate
	year6_total := year5_total + year6_interest

	year7_interest := year6_total * rate
	year7_total := year6_total + year7_interest

	year8_interest := year7_total * rate
	year8_total := year7_total + year8_interest

	year9_interest := year8_total * rate
	year9_total := year8_total + year9_interest

	year10_interest := year9_total * rate
	year10_total := year9_total + year10_interest

	// print header
	fmt.Printf("%-6s%12s%12s%12s\n", "Year", "Initial", "Interest", "Total")
	fmt.Println("------------------------------------------------------------")

	// print each year (still one line per year exactly like your TS version)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "1", initialamount, year1_interest, year1_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "2", initialamount, year2_interest, year2_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "3", initialamount, year3_interest, year3_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "4", initialamount, year4_interest, year4_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "5", initialamount, year5_interest, year5_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "6", initialamount, year6_interest, year6_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "7", initialamount, year7_interest, year7_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "8", initialamount, year8_interest, year8_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "9", initialamount, year9_interest, year9_total)
	fmt.Printf("%-6s%12.2f%12.2f%12.2f\n", "10", initialamount, year10_interest, year10_total)

	fmt.Println("\nDone.")
}
