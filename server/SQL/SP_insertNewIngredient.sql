-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		CGroup4
-- Create date: 26.12.2022
-- Description:	SP insert new ingredient
-- =============================================
CREATE PROCEDURE sp_insertNewIngredient 
	@name varchar(256),
	@img nvarchar(1024),
	@calories int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT OFF;

    -- Insert statements for procedure here
	INSERT INTO _ingredients(name, img, calories)
	VALUES(@name, @img, @calories)
	SELECT SCOPE_IDENTITY() as id
END
GO
