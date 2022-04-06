# Python program to convert
# text file to pdf file


from fpdf import FPDF



def create_pdf(file, name):
	pdf = FPDF()
	pdf.add_page()
	pdf.set_font("Times", size=30)

	# create a cell
	pdf.cell(200, 10, txt=name,
			 ln=1, align='C')

	pdf.set_font("Arial", size=15)
	pdf.cell(200, 10, txt="Written with NoteToSelf",
			 ln=2, align='C')


	pdf.set_font("Arial", size=10)

	with open(file, 'rb') as xy:
		txt = xy.read().decode('latin-1')

	pdf.multi_cell(0, 10, txt)
	new_name = name+".pdf"
	pdf.output(new_name)


create_pdf("hamlet.txt", "Hamlet, the play")

